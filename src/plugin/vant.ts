import {
    Tabbar,
    TabbarItem,
    Button,
    Col,
    Row,
    NavBar,
    Loading,
    Divider,
    Icon,
    Form,
    Field,
    CellGroup,
    Dialog
} from 'vant';
const vant = {
    install(app: any) {
        app.use(Button)
        app.use(Tabbar)
        app.use(TabbarItem)
        app.use(Col)
        app.use(Row)
        app.use(NavBar)
        app.use(Loading)
        app.use(Divider)
        app.use(Icon)
        app.use(Form)
        app.use(Field)
        app.use(CellGroup)
        app.use(Dialog)
    }
}
export default vant