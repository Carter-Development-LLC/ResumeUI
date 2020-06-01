import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Loader from '../../utilities/Loader';

import { BioAPI } from '../../APIFacade';
import Observer from '../../model/observer/Observer';
import Bio from '../../model/domain/Bio';
import { PageProps } from './Page';

type AboutState = {
    bio: Bio | null;
    isLoading: boolean;
};

export default class About extends React.Component<PageProps, AboutState> implements Observer {
    id: string;
    subject: BioAPI;

    constructor(props: PageProps) {
        super(props);
        this.id = 'AboutPage';
        this.subject = new BioAPI();
        this.state = {
            bio: null,
            isLoading: true,
        };
    }

    componentDidMount = (): void => {
        this.subject.subscribe(this);
        this.subject.getData();
    };

    componentWillUnmount = (): void => {
        this.subject.unSubscribe(this);
    };

    update = (): void => {
        this.setState({ bio: this.subject.data as Bio, isLoading: false });
    };

    render(): React.ReactElement {
        return (
            <Container
                as={'section'}
                className={'py-5'}
                style={{
                    marginBottom: this.props.footerHeight,
                    marginTop: this.props.headerHeight,
                }}>
                <Row as={'article'}>
                    {this.state.isLoading ? (
                        <Col xs={'auto'} className={'mx-auto'}>
                            <Loader />
                        </Col>
                    ) : (
                        <Col xs={11} lg={8} className={'mx-auto'}>
                            <img
                                alt={"Brian Carter's profile"}
                                className={'mr-3 profile-img'}
                                src={`${process.env.PUBLIC_URL}/media/profile.jpg`}
                                style={{
                                    float: 'left',
                                }}
                            />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: this.state.bio!.content,
                                }}
                            />
                        </Col>
                    )}
                </Row>
            </Container>
        );
    }
}
