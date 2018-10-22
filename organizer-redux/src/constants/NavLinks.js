const NavLinks = {
    MAIN_PUBLIC: [
        { label: 'Login', to: '/users/login' },
        { label: 'Register', to: '/users/register' },
    ],
    MAIN_PRIVATE: [
        { label: 'Home', to: '/' },
        { label: 'Add Todo', to: '/todos/add' },
        { label: 'Manage Lists', to: '/lists' },
        { label: 'Logout', to: '/users/logout' },
    ]
}

export default NavLinks;