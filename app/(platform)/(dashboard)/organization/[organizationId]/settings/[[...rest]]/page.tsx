import { OrganizationProfile } from "@clerk/nextjs"

export default function SettingsPage(){
    return(
        <div className="w-full">
            <OrganizationProfile

                appearance={
                    {
                        elements: {
                            cardBox: {
                            boxShadow: "none",
                            border: "1px solid #e5e5e5",
                            width: "100%"
                            },
                            rootBox:{
                                width:"100%",
                                boxShadow: "none"
                            },
                            title: {
                                // Aquí puedes definir estilos o modificar el texto del título
                                // Por ejemplo, para cambiar el texto:
                                text: "Nuevo Título",
                                // O para aplicar estilos:
                                styles: { color: "red", fontSize: "24px" }
                            },
                            headerTitle:{
                                backgroundColor: "",
                                text: "asdasd",
                            }
            }}}        
            />
        </div>
    )
}