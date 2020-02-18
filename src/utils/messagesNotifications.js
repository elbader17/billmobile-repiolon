import { COLORS } from "../constants/colors";

export const messageConfirmAccount = {
    message: "¡Cuenta Verificada!",
    description: "Inicie Sesión",
    floating: true,
    icon: { icon: "auto", position: "left" },
    type: 'success',
    duration: 3000
};

export const messageAddItemInvoice = {
    message: "Producto/Servicio Temporal",
    description: "Se creará solo para esta Factura",
    floating: true,
    icon: { icon: "auto", position: "left" },
    type: 'warning',
    position: {top: 250},
    duration: 3450
};

export const messageItemsIncomplete = {
    message: "Agregar Item/s",
    description: "Añadir item/s a la Factura",
    floating: true,
    icon: { icon: "auto", position: "left" },
    type: 'warning',
    duration: 2000
};

export const messageInfoChart = {
    message: "Facturación por Mes",
    description: `Período: 2019 \nLos montos se expresan en K ($1K = $1000)`,
    floating: true,
    icon: { icon: "auto", position: "left" },
    type: 'info',
    backgroundColor: COLORS.blue,
    style: {
      borderWidth: 1,
      borderColor: COLORS.blueLight
    },
    duration: 4000
};

export const messageCobros = {
    message: "Cobros Pendientes",
    description: `Período: 2019 \nFacturas que no han sido cobradas\nHay 8 Cobros por efectuar\n¡Detalles de Cobros Pendientes!`,
    floating: true,
    icon: { icon: "auto", position: "left" },
    type: 'info',
    backgroundColor: COLORS.blue,
    style: {
      borderWidth: 1,
      borderColor: COLORS.blueLight
    },
    duration: 4000
};

export const messageTotalPeriod = {
    message: "Total facturado",
    description: `$20.569 de $200.000\n\nPeríodo: 2019 `,
    floating: true,
    icon: { icon: "auto", position: "left" },
    type: 'info',
    backgroundColor: COLORS.blue,
    style: {
      borderWidth: 1,
      borderColor: COLORS.blueLight
    },
    duration: 4000
};

export const messageCustomerIncomplete = {
    message: "Agregar Cliente",
    description: "Añadir un cliente a la Factura",
    floating: true,
    icon: { icon: "auto", position: "left" },
    type: 'warning',
    duration: 3000
};

export const messageRequestData = {
    message: "Completar Datos del Receptor",
    description: `El total de la factura es mayor o igual\n a $10.000 por lo que deberá completar\n todos los datos del receptor para\n continuar.`,
    floating: true,
    autoHide: false,
    icon: { icon: "danger", position: "left" },
    type: 'warning'
};