import Sidebar from "./sidebar"

export default function Layout(props) {
    const { children } = props
    return (
        <div>
            <Sidebar/>
            {children}
        </div>
    )
}