import {Tabs,Tab,Paper} from '@material-ui/core';


const tabsStyle = {
    marginLeft: '50%',
}


const Menu = () => (
    <Paper square>
        <Tabs value={0}
            indicatorColor="primary"
            textColor="primary"
            aria-label="disabled tabs example"
        >
            <Tab index={0} styes={tabsStyle} label="Home" />

        </Tabs>
    </Paper>

);

export default Menu;