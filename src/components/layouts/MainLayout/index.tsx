interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500">
            <nav className="h-[5rem] bg-blue-gray-500"></nav>
            {children}
        </div>
    )
}

export default MainLayout;