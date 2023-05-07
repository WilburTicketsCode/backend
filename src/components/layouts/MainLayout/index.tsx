interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500">
            {children}
        </div>
    )
}

export default MainLayout;