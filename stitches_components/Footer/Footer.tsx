import { css, styled } from "@stitches/react";
import Link from "next/link";
import { FC } from "react";
import { OnlineBankom } from "./Online";
import { BsCreditCard2Back, BsGithub } from 'react-icons/bs';
import { FiMail } from "react-icons/fi";

 

type FooterProps = {
    children?: JSX.Element | JSX.Element[]
}

const Text = styled("p", {

})

const Footer:FC<FooterProps> = (props) => {
    const {  children } = props;
    return (
        <div>
            { children }
            <FooterMain>
            <Link href="/">
                <a >
                    <FooterLink>
                        Skjemaer
                    </FooterLink>
                </a>
                
            </Link>
            <Link href="/">
                <a >
                    <span >
                        Budsjett
                    </span>
                </a>
                
            </Link>
            <Link href="/">
                <a >
                    <FooterLink>
                        Kontakt
                    </FooterLink>
                </a>
                
            </Link>
            <OnlineBankom className={ styles.bankomLogo()}/>
            <Link href="/">
                <a >
                    <FooterLink>
                        Om oss
                    </FooterLink>
                </a>
                
            </Link>
            
            
            <Link href="/">
                <a >
                    <FooterLink>
                        Faktura informasjon
                    </FooterLink>
                </a>
                
            </Link>
           
            <Link href="/">
                <a >
                    <FooterLink>
                        FAQ
                    </FooterLink>
                </a>
                
            </Link>

            </FooterMain>
           <Border></Border>
           <FooterIcons >
            <BsGithub className={ style.icon()}/>
            <FiMail className={ style.icon()}/>
            <BsCreditCard2Back className={ style.icon()}/>
          </FooterIcons>
           
          <p className ={onlineStyles.footer()}> ©Online Linjeforening 2021</p>

            
            
        </div>

    )
}


const FooterLink = styled('span', {
    display: "flex",
    justifyContent: "center",
    padding: "20 px"


})
const styles = {
    bankomLogo : css({
        height: "30px",
    })
}
const onlineStyles = {
    footer : css({
        display: "flex",
        justifyContent:"center",
        marginTop: "0.75rem", 
        color: "#6B7280", 
        fontSize: "0.75rem ",
        lineHeight: "1rem", 
        
    })
}
const style = {
    icon : css({
        fontSize: "45px",
        margin:"10px",
    })
}
const FooterMain = styled('div', {
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-between",
    paddingRight: "120 px",
    margin: "10px",


})

const FooterIcons = styled('div', {
    display: "flex",
    flexDirection:"row",
    justifyContent:"center",
    


})
const Border = styled('div', {
    display: "flex",
    border: "3px solid ",
    borderColor: "#00000080" ,
    borderWidth: "1px",    
    marginTop:"40px",


   


})





export default Footer;