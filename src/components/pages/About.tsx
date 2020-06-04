import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import BioAPIFacade from '../../model/serverFacade/BioAPIFacade';
import Loader from '../utilities/Loader';
import Observer from '../../model/serverFacade/observer/Observer';
import Bio from '../../model/domain/Bio';
import { PageProps } from './Page';

type AboutState = {
    bio: Bio | null;
    fetchFailed: boolean;
    isLoading: boolean;
};

export default class About extends React.Component<PageProps, AboutState> implements Observer {
    id: string;
    subject: BioAPIFacade;

    constructor(props: PageProps) {
        super(props);
        this.id = 'AboutPage';
        this.subject = new BioAPIFacade();
        this.state = {
            bio: null,
            fetchFailed: false,
            isLoading: true,
        };
    }

    componentDidMount = (): void => {
        this.subject.subscribe(this);
        this.subject.getData(this.handleFetchError);
    };

    componentWillUnmount = (): void => {
        this.subject.unSubscribe(this);
    };

    handleFetchError = (): void => {
        this.setState({ fetchFailed: true, isLoading: false });
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
                    ) : this.state.fetchFailed ? (
                        <Col xs={12}>
                            <Alert variant={'danger'} className={'text-center'}>
                                Sorry, something went wrong fetching the data. Please try again
                                later.
                            </Alert>
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
