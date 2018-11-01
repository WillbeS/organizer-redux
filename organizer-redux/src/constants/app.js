const crud = {
    MODE_CREATE: 'MODE_CREATE',
    MODE_READ: 'MODE_READ',
    MODE_UPDATE: 'MODE_UPDATE',
    MODE_DELETE: 'MODE_DELETE',
}

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

export { crud, NavLinks };