import AppBar from '@material-ui/core/AppBar';

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <div className="header">
                <p className="title">Lista de compras</p>
            </div>
        </AppBar>
    );
};

export default Header;