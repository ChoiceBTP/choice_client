import { SettingsIcon } from "@chakra-ui/icons"
import { IconButton } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const SettingsButton = () => {
    return (
        <Link to="/settings">
            <IconButton position="absolute" right="5" top="5" icon={<SettingsIcon />} />
        </Link>
    )
}

export default SettingsButton