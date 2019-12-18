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
    duration: 2000
};

export const messageLogOut = {
    message: "Cerrar Sesión",
    description: "No Implementado",
    floating: true,
    icon: { icon: "auto", position: "left" },
    type: 'info',
    duration: 2450,
    position: {top: 50}
};

export const messageOptions = {
    message: "Opciones",
    description: "No Implementado",
    floating: true,
    icon: { icon: "auto", position: "left" },
    type: 'info',
    duration: 2450,
    position: {top: 50}
};


