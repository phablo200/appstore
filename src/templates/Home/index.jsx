import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';

const Home = () => {
    return (
        <div className="new-list-container">
            <Card className="card">
                <CardActionArea className="card-action-area">
                    <CardContent className="card-content">
                        <div className="title">
                            <p>Adicionar</p>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
};

export default Home;