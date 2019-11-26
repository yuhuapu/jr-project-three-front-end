function ButtonLink(props) {

    switch (props) {
        case "Course List":
            return "/admin/dashboard/courselist";
        
        default:
            break;
    }
}

export default ButtonLink;