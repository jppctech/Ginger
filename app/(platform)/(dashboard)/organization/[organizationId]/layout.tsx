import { OrgControl } from "./_componets/org-control";

const OraganizationIdLayout = ({children}:{children:React.ReactNode})=>{
    return(
        <>
            <OrgControl/>
            {children}
        </>
    );
};

export default OraganizationIdLayout;