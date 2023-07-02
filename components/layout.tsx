import Sidebar from "./sidebar"

export default function Layout(props: { children: any }) {
    const { children } = props
    return (
        <div>
            <Sidebar/>
            {children}
        </div>
    )
}