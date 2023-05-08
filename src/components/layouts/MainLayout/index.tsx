interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="h-screen w-screen bg-gradient-to-br from-indigo-300 via-purple-800 to-blue-200">
            <nav className="h-[5rem] bg-blue-gray-500"></nav>
            {children}
        </div>
    )
}

export default MainLayout;