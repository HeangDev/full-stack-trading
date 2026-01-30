export const navData = [
    {
        header: "Overview",
        items: [
            {
                label: 'Dashboard',
                icon: 'solar:database-bold-duotone',
                href: '/dashboard'
            },
        ]
    },
    {
        header: "Pages",
        items: [
            {
                label: 'User',
                icon: "solar:user-bold-duotone", 
                subMenu: [
                    { label: 'List', href: 'user/list' },
                    { label: 'Create', href: 'user/create' },
                ]
            },
            {
                label: 'Recruiter',
                icon: "solar:users-group-two-rounded-bold", 
                subMenu: [
                    { label: 'List', href: 'recruiter/list' },
                    { label: 'Create', href: 'recruiter/create' },
                ]
            },
            {
                label: 'Plans',
                icon: 'solar:box-minimalistic-bold-duotone',
                href: '/plans'
            },
            {
                label: 'Payments',
                icon: 'solar:card-bold-duotone',
                href: '/payments'
            },
        ]
    },
    {
        header: "Other",
        items: [
            {
                label: 'Reports',
                icon: "solar:folder-open-bold-duotone", 
                subMenu: [
                    { label: 'Income', href: 'reports/income' },
                    { label: 'Sales', href: 'reports/sales' }
                ]
            }
        ]
    }
]