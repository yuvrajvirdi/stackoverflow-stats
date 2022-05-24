export interface ButtonProps {
    text: string
    icon: React.ReactNode
    colour: 'primary' | 'secondary'
    onClick: () => void
};