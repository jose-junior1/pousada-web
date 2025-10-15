import { Menu } from "./styles"

const MenuButton = ({ isOpen, toggleMenu }: Props) => (
    <Menu onClick={(toggleMenu)}>
        {isOpen ? (
            <b>X</b>
        ) : (
            <>
                <span />
                <span />
                <span />
            </>
        )}
    </Menu>
)

export default MenuButton