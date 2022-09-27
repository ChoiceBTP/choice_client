import { ArrowLeftIcon, SettingsIcon } from "@chakra-ui/icons"
import { DefaultIcon, IconButton } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const HomeButton = () => {
    return (
        <Link to="/home">
            <IconButton position="absolute" right="20" top="5" icon={<ArrowLeftIcon />} />
        </Link>
    )
}

export default HomeButton