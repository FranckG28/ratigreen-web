export interface NavbarLink {
    label: string;
    url: string;
    icon?: string;
    children?: NavbarLink[];
}

export const navbarLinks: NavbarLink[] = [
];