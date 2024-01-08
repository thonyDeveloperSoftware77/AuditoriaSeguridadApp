

export default function ActivoMediatorCreate(props) {
    const activo = props.activo
    return (
        <>
            {
                activo === "[info]"  ? <OrganizacionModalEdit {...props} />
                    : ""
            }
        </>
    )
}