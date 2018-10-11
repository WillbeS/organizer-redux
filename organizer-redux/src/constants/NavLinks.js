const NavLinks = {
    MAIN_PUBLIC: [
        { label: 'Login', to: '/users/login' },
        { label: 'Register', to: '/users/register' },
    ],
    MAIN_PRIVATE: [
        { label: 'Home', to: '/' },
        { label: 'Add Todo', to: '/todos/add' },
        { label: 'Logout', to: '/users/logout' },
    ]
}

export default NavLinks;