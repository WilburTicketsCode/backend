interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="h-screen w-screen bg-indigo-500">
            {children}
        </div>
    )
}

export default MainLayout;