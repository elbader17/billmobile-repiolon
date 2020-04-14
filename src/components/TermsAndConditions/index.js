import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { COLORS } from "../../constants/colors";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { FONTS } from "../../constants/fonts";
import { ScrollView } from "react-native-gesture-handler";

class TermsAndConditions extends React.Component {
  navigate = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={style.container}>
        <View style={style.body}>
          <Text style={style.textTittle}>Términos y Condiciones</Text>
          <ScrollView style={style.scroll}>
            <Text style={style.textDescription}>
              Los siguientes términos y condiciones rigen el uso que usted le dé
              a ésta aplicación móvil “Bill Mobile” y a cualquiera de los
              contenidos disponibles por o a través de esta aplicación móvil,
              incluyendo cualquier contenido derivado de la misma.
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                AL USAR LA APLICACIÓN MÓVIL, USTED ACEPTA Y ESTÁ DE ACUERDO CON
                ESTOS TÉRMINOS Y CONDICIONES EN LO QUE SE REFIERE A SU USO DE LA
                APLICACIÓN MÓVIL
              </Text>
              . Si usted no está de acuerdo con estos Términos y Condiciones, no
              puede tener acceso al mismo ni usar la aplicación móvil de ninguna
              otra manera. Esta aplicación móvil pertenece a la Empresa
              NUXTULABS S.A.S,con domicilio en calle Dean Funes 680, Ciudad de
              Río Cuarto, Provincia de Córdoba, Argentina (en adelante LA
              EMPRESA) y su acceso y utilización está sujeta a la aceptación y
              cumplimiento de los términos y condiciones que se exponen a
              continuación: {"\n\n"}{" "}
              <Text style={{ fontWeight: "bold" }}>
                1. Derechos de Propiedad :
              </Text>
               Entre usted y la empresa. LA EMPRESA es dueño único y exclusivo,
              de todos los derechos, título e intereses en y de la aplicación
              móvil, de todo el contenido (incluyendo, por ejemplo, audio,
              fotografías, ilustraciones, gráficos, otros medios visuales,
              videos, copias, textos, software, títulos, etc.), códigos, datos y
              materiales de la misma, el aspecto y el ambiente, el diseño y la
              organización de la aplicación móvil y la compilación de los
              contenidos, incluyendo pero no limitado a, cualesquiera derechos
              de autor, derechos de marca, derechos de patente, derechos de base
              de datos, derechos morales, derechos sui generis y otras
              propiedades intelectuales y derechos patrimoniales de la misma. Su
              uso de la aplicación móvil no le otorga propiedad de ninguno de
              los contenidos, códigos, datos o materiales a los que pueda
              acceder en o a través de la aplicación móvil. El usuario es dueño
              único y exclusivo de la clave fiscal que proporciona para ingresar
              a la aplicación móvil.
              {"\n\n"}
              <Text style={{ fontWeight: "bold" }}>2. Registración :</Text> Los
              Servicios de la Empresa que ofrece a través del Sitio son de
              acceso restringido, con lo cual sólo podrán acceder a los mismos
              aquellos Usuarios que se registren completando todos los campos
              obligatorios del formulario de registración (en adelante el
              “Formulario”), con datos auténticos y actuales.Al completar el
              Formulario, el Usuario acepta:{"\n"} (1) Proveer información
              verdadera, cierta, correcta, actualizada y completa (en adelante
              los “Datos de Registro”), que serán procesados y almacenados en
              servidores con sistemas de seguridad para su protección y
              seguridad.{"\n"} (2) Mantener actualizados los Datos de Registro,
              de manera que los mismos continúen siendo verdaderos, ciertos,
              correctos, actualizados, y completos.{"\n"} (3) En caso que el
              Usuario provea información que sea falsa, incorrecta,
              desactualizada o incompleta, o la Empresa tenga una base razonable
              de sospecha de que dicha información sea falsa, incorrecta,
              desactualizada o incompleta, la Empresa tendrá el derecho de
              suspender o terminar la posibilidad del Usuario de utilizar los
              Servicios, así como a rechazar cualquier nuevo o futuro uso de los
              Servicios por dicho Usuario (o sólo alguno de ellos). Una vez
              completado el Formulario se le informará al Usuario dicha
              aceptación y el registro de su cuenta (en adelante la “Cuenta”),
              vía correo electrónico u otro medio elegido para tal fin, a la
              misma dirección ingresada en el Formulario.El Usuario deberá tener
              capacidad legal para contratar y no encontrarse bajo ningún
              impedimento legal o de hecho para contratar.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>
                3. Uso Prohibido :{" "}
              </Text>{" "}
              Cualquier distribución, publicación o explotación comercial o
              promocional de la aplicación móvil, o de cualquiera de los
              contenidos, códigos, datos o materiales en la aplicación móvil,
              está estrictamente prohibida, a menos de que usted haya recibido
              el previo permiso expreso por escrito del personal autorizado de
              LA EMPRESA o de algún otro poseedor de derechos aplicable. A no
              ser como está expresamente permitido en el presente contrato,
              usted no puede descargar, informar, exponer, publicar, copiar,
              reproducir, distribuir, transmitir, modificar, ejecutar, difundir,
              transferir, crear trabajos derivados de, vender o de cualquier
              otra manera explotar cualquiera de los contenidos, códigos, datos
              o materiales en o disponibles a través de la aplicación móvil.
              Usted se obliga además a no alterar, editar, borrar, quitar, o de
              otra manera cambiar el significado o la apariencia de, o cambiar
              el propósito de, cualquiera de los contenidos, códigos, datos o
              materiales en o disponibles a través de la aplicación móvil,
              incluyendo, sin limitación, la alteración o retiro de cualquier
              marca comercial, marca registrada, logo, marca de servicios o
              cualquier otro contenido de propiedad o notificación de derechos
              de propiedad. Usted reconoce que no adquiere ningún derecho de
              propiedad al descargar algún material con derechos de autor de o a
              través de la aplicación móvil. Si usted hace otro uso de la
              aplicación móvil, o de los contenidos, códigos, datos o materiales
              que ahí se encuentren o que estén disponibles a través de la
              aplicación móvil, a no ser como se ha estipulado anteriormente,
              usted puede violar las leyes de derechos de autor y otras leyes de
              la República Argentina, y puede ser sujeto a responsabilidad legal
              por dicho uso no autorizado.
              {"\n\n"}
              <Text style={{ fontWeight: "bold" }}>
                4. Marcas Comerciales :{" "}
              </Text>
              La marca comercial, logo, marca de servicio, marca registrada
              (conjuntamente la "Marca Comercial") expuestas en la aplicación
              móvil o en los contenidos disponibles a través de la aplicación
              móvil son Marcas Comerciales de LA EMPRESA registradas y no
              registradas y otras, y no pueden ser usadas con respecto a
              productos y/o servicios que no estén relacionados, asociados o
              patrocinados por sus poseedores de derechos y que puedan causar
              confusión a los clientes, o de alguna manera que denigre o
              desacredite a sus poseedores de derechos. Todas las Marcas
              Comerciales que no sean de LA EMPRESA que aparezcan en la
              aplicación móvil o en o a través de los servicios dela aplicación
              móvil, si las hubiera, son propiedad de sus respectivos dueños.
              Nada que esté contenido en la la aplicación móvil deberá ser
              interpretado como otorgando, por implicación, desestimación, o de
              otra manera, alguna licencia o derecho para usar alguna Marca
              Comercial expuesta en la aplicación móvil sin el permiso escrito
              de LA EMPRESA o de terceros que puedan ser dueños de dicha Marca
              Comercial. El mal uso de las Marcas Comerciales expuestas en la
              aplicación móvil o en o a través de cualquiera de los servicios de
              la aplicación móvil está estrictamente prohibido.{"\n\n"}{" "}
              <Text style={{ fontWeight: "bold" }}>
                5. Información del Usuario :
              </Text>{" "}
              En el curso del uso que usted haga de la aplicación móvil y/o de
              los servicios puestos a su disposición en o a través dela
              aplicación móvil, se le puede pedir que nos proporcione cierta
              información personalizada (dicha información en lo sucesivo
              "Información del Usuario"). Las políticas de uso y recopilación de
              información de LA EMPRESA con respecto a la privacidad de dicha
              Información del Usuario se establecen en la política de
              privacidad de las Bases y Condiciones. Usted reconoce y acepta ser
              el único responsable de la exactitud del contenido de la
              Información del Usuario.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>
                6. Política de privacidad :
              </Text>
              La utilización e ingreso a la presente aplicación móvil de LA
              EMPRESA, será considerado como aceptación de los términos de esta
              Política de Privacidad por parte del USUARIO y/o VISITANTE. Los
              datos personales que el USUARIO y/o VISITANTE brinde libre y
              voluntariamente a LA EMPRESA, tales como nombres, correo
              electrónico, DNI, Cuit, clave fiscal, teléfono y/o cualquier otro
              que voluntariamente suministre a LA EMPRESA cuando ello sea
              necesario para brindarle un servicio específico, son incluidos en
              archivos automatizados, procesados bajo normas de estricta
              confidencialidad y protección de datos. El USUARIO y/o VISITANTE
              podrá brindar información con respecto a sus gustos, evaluaciones
              y preferencias. LA EMPRESA utilizará dicha información para
              elaborar publicidad y/o perfeccionar el servicio brindado. No
              obstante lo anterior y en cumplimiento con las leyes aplicables,
              LA EMPRESA coopera con las autoridades gubernamentales nacionales,
              provinciales y municipales, e internacionales en cualquier
              investigación en relación con el contenido, ya sean personales o
              privadas, transmitidas a LA EMPRESA a través de este Sitio.
              {"\n\n"}
              <Text style={{ fontWeight: "bold" }}>
                7. Violaciones del sistema o base de datos:
              </Text>
              Es ilícita cualquier acción o uso de dispositivos, software, u
              otros instrumentos tendientes a interferir tanto en las
              actividades y operatoria de LA EMPRESA, así como en las ofertas,
              descripciones, cuentas o bases de datos de LA EMPRESA. Cualquier
              intromisión, tentativa o actividad violatoria o contraria a las
              leyes sobre derechos de propiedad intelectual, seguridad de los
              sistemas, y/o a las prohibiciones estipuladas en este documento
              harán pasible a su responsable de las acciones legales
              pertinentes, y a las sanciones previstas por este acuerdo.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>8. Comisiones :</Text> Las
              tarifas publicadas en ésta aplicación móvil son precisas sólo a
              partir de la fecha de publicación y están sujetas a cambios.{" "}
              {"\n\n"}
              <Text style={{ fontWeight: "bold" }}>
                9. Enlaces con el Sitio Web :
              </Text>
               Usted está de acuerdo en que si incluye un enlace (link) de
              cualquier otro sitio web al Sitio Web, dicho enlace se abrirá en
              una nueva ventana navegadora y se enlazará con la versión completa
              de una página formateada HTML de este Sitio Web. Usted no tiene
              permitido enlazarse directamente a ninguna imagen almacenada en el
              Sitio Web o en nuestros servicios, como sería usar un método de
              enlace "en-línea" para provocar que la imagen almacenada por
              nosotros fuera expuesta en otro sitio web. Usted se obliga a no
              descargar o usar imágenes almacenadas en este Sitio Web en otro
              sitio web, con cualquier propósito, incluyendo, sin limitación,
              publicar dichas imágenes en otro sitio web. Usted se obliga a no
              enlazarse de cualquier otro sitio web a este Sitio Web de tal
              manera que el Sitio Web, o cualquier página del Sitio Web, esté
              "enmarcado", rodeado u ofuscado por los contenidos, materiales o
              posicionamientos de marca de cualquier tercero. Nos reservamos
              todos nuestros derechos bajo la ley para insistir en que cualquier
              enlace al Sitio Web sea descontinuado y a revocar su derecho a
              enlazarse al Sitio Web de cualquier otro sitio web, en cualquier
              momento en el que le mandemos notificación por escrito.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>
                10. Sitios Web de Terceros :
              </Text>
               Usted puede enlazar (link) del Sitio Web a sitios web de terceros
              y terceros pueden enlazarse al Sitio Web ("Sitios Enlazados").
              Usted reconoce y está de acuerdo en que nosotros no tenemos
              responsabilidad sobre la información, contenido, productos,
              servicios, anuncios, códigos u otros materiales que puedan o no
              puedan ser proporcionados por o a través de los Sitios Enlazados,
              aún si son propiedad de o son dirigidos por afiliados nuestros.
              Los enlaces (links) a Sitios Enlazados no constituyen un aval o
              patrocinio nuestro de dichos sitios web o de la información,
              contenido, productos, servicios, anuncios, códigos u otros
              materiales presentados en o a través de dichos sitios web. La
              inclusión de cualquier enlace a dichos sitios en nuestro Sitio no
              implica el aval, patrocinio o recomendación de ese sitio de LA
              EMPRESA. LA EMPRESA rechaza cualquier responsabilidad por los
              enlaces (1) de otro sitio web a este Sitio Web y (2) a otro sitio
              web de este Sitio Web. LA EMPRESA no puede garantizar los
              estándares de cualquier sitio web al cual se le proporcionen
              enlaces en este Sitio Web, ni será LA EMPRESA responsable de los
              contenidos de dichos sitios, o de cualquier enlace subsecuente. LA
              EMPRESA no representa o garantiza que los contenidos del sitio web
              de algún tercero sean exactos, que cumplan con leyes provinciales
              o federales, o que cumplan con las leyes de derechos de autor o
              con otras leyes de propiedad intelectual. LA EMPRESA tampoco es
              responsable de cualquier forma de transmisión recibida de
              cualquier sitio web enlazado. Cualquier confianza depositada en
              los contenidos de un sitio web de terceros es hecha por su propio
              riesgo y usted asume todas las responsabilidades y consecuencias
              que resulten de dicha confianza.
              {"\n\n"}
              <Text style={{ fontWeight: "bold" }}>11. Calidad :</Text> Mediante
              el uso de esta aplicación móvil, el USUARIO y/o VISITANTE reconoce
              y acepta que LA EMPRESA no controla ni garantiza la ausencia de
              virus en el contenido de los sitios enlazados, ni la ausencia de
              otros elementos que pudieran producir alteraciones en sus sistemas
              informáticos o en los documentos electrónicos y archivos
              almacenados en los archivos informáticos del USUARIO.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>
                12. Obligaciones del Usuario y/o visitante :
              </Text>{" "}
              El USUARIO y/o VISITANTE no podrá, remover, eliminar, aumentar,
              añadir, ni de cualquier otra forma modificar total o parcialmente
              el Contenido. Tampoco podrá volcar términos o utilizar expresiones
              injuriosas, intimidatorias, calumniantes o contrarias a las buenas
              costumbres. No podrá transmitir información o material que pueda,
              concreta o eventualmente, violar derechos de un tercero o que
              contenga virus o cualquier otro componente dañino. El USUARIO y/o
              VISITANTE se obliga a usar el Sitio de conformidad con estos
              Términos y Condiciones, en forma diligente, correcta y lícita, y
              conforme con la moral y las buenas costumbres. El USUARIO y/o
              VISITANTE responderá por los daños y perjuicios de toda naturaleza
              que LA EMPRESA pueda sufrir, directa o indirectamente, como
              consecuencia del incumplimiento de cualquiera de las obligaciones
              derivadas de estos Términos y Condiciones. LA EMPRESA podrá
              suspender transitoriamente o finalizar la publicación de la página
              sin aviso previo y en cualquier momento, sin que ello genere
              derecho a indemnización alguna en favor del USUARIO y/o VISITANTE.
              El USUARIO y/o VISITANTE reconoce y acepta que el uso de esta
              página es bajo su propio y exclusivo riesgo. El USUARIO y/o
              VISITANTE reconoce y acepta que ni LA EMPRESA, ni los directores,
              empleados o representantes de cualquiera de ellos, es responsable
              por daños que surjan de o resulten del uso de esta aplicación
              móvil, incluyendo cualquier error, omisión, interrupción, falla,
              eliminación de archivos o correos electrónicos (e-mails),
              defectos, virus, y/o demoras en la operación o transmisión y/o de
              cualquier otro tipo.{"\n"} 1. Queda prohibido: Utilizar los
              Servicios directa o indirectamente, para violar cualquier ley
              aplicable, cualquiera fuese su naturaleza, ya sea provincial,
              nacional o internacional; o violatorio de cualquier ley aplicable,
              nacional o internacional, o de la moral, las buenas costumbres, o
              el orden público; transmitir, distribuir, o almacenar cualquier
              tipo de información, datos o materiales que violen leyes o
              regulaciones provinciales, nacionales o internacionales; enviar o
              transmitir información cuyo contenido sea, directa o
              indirectamente, y sin que lo siguiente se considere una
              limitación, transgresor, profano, abusivo, difamatorio y/ o
              fraudulento, o que revele asuntos privados o personales que
              afecten a persona alguna, o de alguna forma violen los derechos de
              los demás; acceder los Servicios utilizando un nombre falso,
              erróneo o inexistente, ya sea como persona física o jurídica;
              enviar o transmitir material alguno que el Usuario no tenga
              derecho a transmitir con arreglo a las leyes (ya sea de Copyright,
              marca registrada, secreto comercial, patentes u otros derechos de
              la propiedad de terceros aunque no limitado a ello solamente) o
              con arreglo a relaciones contractuales o fiduciarias (tales como
              los contratos de no divulgación).{"\n"} 2. Queda prohibido: Violar
              o alterar de cualquier forma los sistemas de autenticación,
              verificación de identidad y seguridad de los Servicios, redes o
              cuentas de Usuarios, y/o administradores y/o responsables de los
              Servicios; esto incluye, y no se limita, a tratar de acceder a
              datos no destinados al Usuario, intentar ingresar a los Servicios
              o cuentas sin contar con la expresa autorización para hacerlo, o
              intentar probar o alterar de cualquier forma y a cualquier nivel
              la seguridad de las redes de la Empresa, utilizando cualquier
              clase de herramientas que sirvan a idénticos o similares fines;
              intentar interrupciones, variaciones o cortes en las
              comunicaciones de internet, tales como alterar información de
              ruteo, derivación y/o distribución, sobrecargar deliberadamente
              uno o más Servicios (overflow o similar), efectuar ataques
              informáticos a otras computadoras sobre internet u otro tipo de
              red de comunicaciones informática, global, local y/o interna,
              entre otros; utilizar cualquier programa, comando o grupo de
              comandos, o enviar mensajes de cualquier tipo, destinados a
              interferir con la sesión establecida por un Usuario en cualquier
              punto de internet; efectuar cualquier tipo de monitoreo que
              implique la intercepción de información no destinada al Usuario;
              enviar o transmitir archivos que contengan virus u otras
              características destructivas que puedan afectar de manera adversa
              el funcionamiento de una computadora ajena y/ o puedan afectar el
              correcto funcionamiento de las mismas y/ o de los Servicios;
              utilizar cualquier programa de computación (software) u otro
              medio, que induzca a engaño, a los fines de aumentar o procurar
              ventajas patrimoniales o comerciales en favor del Usuario o de
              terceros no autorizados por la Empresa o no previstos en estos
              Términos y Condiciones; efectuar acciones que restrinjan,
              denieguen o impidan a cualquier individuo, grupo, entidad u
              organización el uso de los Servicios, y de internet en general.
              Asimismo, el uso de cualquier método o sistema, de computación o
              no, por parte del Usuario y/o terceros en favor de éste a los
              fines de la utilización de los Servicios, que no estén
              expresamente autorizados por la Empresa en éstos Términos y
              Condiciones y/o por otro medio expreso, queda prohibido y será
              causal de las sanciones y/o procedimientos que se contemplan en
              ellos, sin perjuicio de las acciones legales que la Empresa y/o
              sus representantes y/o sucesores puedan interponer a sus efectos.
              {"\n\n"}
              <Text style={{ fontWeight: "bold" }}>13. Reserva :</Text> LA
              EMPRESA se reserva el derecho de extraer y editar en su totalidad
              o de manera fraccionada, cualquier mensaje o material suscripto o
              remitido por el USUARIO y/o VISITANTE. Así mismo, el USUARIO y/o
              VISITANTE garantizan a LA EMPRESA el permiso para la utilización
              de cualquier información, sugerencia, idea, dibujo o concepto
              vertido, con el propósito que LA EMPRESA la utilice para la
              obtención de información estadística que permita mejorar el
              servicio, sin ningún derecho de compensación en favor del USUARIO
              y/o VISITANTE. Tratamos de asegurar que la información publicada
              en la aplicación móvil es correcta y actualizada. Nos reservamos
              el derecho de cambiar o hacer correcciones a cualquier información
              proporcionada en la aplicación móvilen cualquier momento y sin
              ningún aviso previo. LA EMPRESA ni avala ni es responsable de la
              exactitud o veracidad de cualquier opinión, consejo o declaración
              en la aplicación móvil, ni de cualquier publicación ofensiva,
              difamatoria, obscena, indecente, ilegal o violatoria hecha en el
              mismo por cualquier persona a no ser un empleado portavoz
              autorizado de la empresa en su carácter oficial (incluyendo, sin
              limitación, otros usuarios dela aplicación móvil). Es su
              responsabilidad evaluar la exactitud, conclusión o utilidad de
              cualquier información, opinión, consejo u otro contenido
              disponible a través dela aplicación móvil. Por favor busque el
              consejo de profesionales, según sea apropiado, con respecto a la
              evaluación de cualquier información, opinión, consejo u otro
              contenido específico, incluyendo pero no limitado a, información,
              opinión, consejo u otro contenido financiero, de salud o de estilo
              de vida. Aunque nos esforzamos por la exactitud de todos los
              elementos del Material del Sitio, éste puede contener
              imprecisiones y/o errores tipográficos. No nos hacemos
              responsables sobre la exactitud, fiabilidad, integridad o
              puntualidad del material de esta aplicación móvil o de los
              resultados que se obtengan del uso de Nuestro Sitio. Usted utiliza
              Nuestro Sitio y su Material bajo su propio riesgo.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>
                14. Límite de responsabilidad :
              </Text>{" "}
              En ningún caso seremos responsables por ningún daño, pérdida de
              beneficios o daños causados por la pérdida de datos o interrupción
              de cualquier actividad comercial que resulten del uso o
              imposibilidad de uso de materiales en esta aplicación móvil o
              sitios enlazados a esta aplicación móvil. Mediante el uso de esta
              aplicación móvil, EL USUARIO Y/O VISITANTE reconoce y acepta que
              LA EMPRESA queda excluida de cualquier responsabilidad que pudiera
              ser causada por el uso no autorizado de las marcas u otros
              derechos de propiedad intelectual de terceros o contenidos en los
              sitios enlazados. De igual manera, las eventuales referencias que
              se hagan en esta aplicación móvil a cualquier producto, servicio,
              proceso, sitio enlazado, hipertexto o cualquier otra información
              en la que se utilicen marcas, signos distintivos o dominios, el
              nombre comercial o el nombre del fabricante, suministrador, etc.,
              que sean titularidad de terceros, en ningún momento constituirán,
              ni implicarán respaldo o recomendación alguna por parte de LA
              EMPRESA. y en ningún caso, la empresa se asignará propiedad ni
              responsabilidad sobre los mismos.
              {"\n\n"}
              <Text style={{ fontWeight: "bold" }}>
                15. Ataques Fotosensibles :
              </Text>
               Un muy pequeño porcentaje de personas pueden experimentar un
              ataque al ser expuestas a ciertas imágenes visuales, como luces o
              dibujos intermitentes que pueden aparecer en juegos de video o en
              otros contenidos electrónicos o en línea. Aún personas que no
              tienen historia de ataques o de epilepsia pueden tener una
              condición no diagnosticada que puede causar estos "ataques
              epilépticos fotosensibles" al estar viendo juegos de video u otros
              contenidos electrónicos. Estos ataques tienen una variedad de
              síntomas, incluyendo mareos, desorientación, confusión, pérdida
              momentánea de conciencia, crispación de ojos o cara, visión
              alterada o tirones o sacudidas de brazos o piernas. Si usted
              experimenta cualquiera de los síntomas anteriormente mencionados,
              o si usted o su familia tiene historia de ataques o epilepsia,
              debe de dejar inmediatamente de usar la aplicación móvil y
              consultar un doctor.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>16. Leyes Aplicables :</Text>
               Estos Términos y Condiciones se regirán e interpretarán de
              acuerdo con las leyes de la República Argentina. EL USUARIO y/o
              VISITANTE conviene en que cualquier acción o procedimiento legal
              entre LA EMPRESA y ellos, por cualquier propósito respecto a estos
              Términos y Condiciones, se entablará exclusivamente en los
              Tribunales Ordinarios y Civiles de la ciudad de Río Cuarto,
              provincia de Córdoba. Mediante el presente Ud. deja constancia que
              ha sido debidamente informado respecto de la finalidad para la
              cual han sido recabados sus datos personales y quiénes pueden ser
              sus destinatarios, como así también el derecho que le asiste a
              tener acceso a los mismos, como así a peticionar su rectificación
              y/o supresión, todo ello conforme a lo normado en la Ley Nacional
              de la República Argentina N° 25326 (Protección de Datos
              Personales) y su Decreto Reglamentario N° 1558/01. {"\n\n"}
              <Text style={{ fontWeight: "bold" }}>17. Término :</Text> LA
              EMPRESA puede terminar, cambiar, suspender o descontinuar
              cualquier aspecto de la aplicación móvil o de los servicios dela
              aplicación móvil en cualquier momento. LA EMPRESA puede
              restringir, suspender o terminar su acceso a la aplicación móvil
              y/o a sus servicios si creemos que usted está en incumplimiento de
              nuestros términos y condiciones o de la ley aplicable, o por
              cualquier otra razón sin notificación o responsabilidad. LA
              EMPRESA mantiene una política que estipula la terminación, en
              circunstancias apropiadas, de los privilegios de uso de la
              aplicación móvil para usuarios que son violadores repetitivos de
              los derechos de propiedad intelectual. LA EMPRESA podrá, en
              cualquier momento, terminar o suspender el acceso que el USUARIO
              y/o VISITANTE tenga a todo o parte de esta aplicación, sin aviso
              previo, y sin que ello genere derecho a reclamo o indemnización
              alguna. Ni la terminación o suspensión del acceso, ni cualquier
              acción o inacción del USUARIO y/o VISITANTE, terminará las
              disposiciones de estos Términos y Condiciones, los que
              permanecerán en plena fuerza y vigor de forma indefinida, sujetas
              sólo a cualquier cambio que LA EMPRESA efectúe.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>
                18. Cambios de Términos de Uso :
              </Text>
               LA EMPRESA se reserva el derecho, a su sola discreción, de
              cambiar, modificar, añadir o quitar cualquier porción de los
              Términos y Condiciones, toda o en parte, en cualquier momento. Los
              cambios en los Términos y Condiciones serán efectivos cuando se
              publiquen. La continuación del uso dela aplicación móvil y/o de
              los servicios puestos a disposición en o a través dela aplicación
              móvil después de haber sido publicado cualquier cambio, será
              considerado como aceptación de esos cambios.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>19. Ubicación :</Text> Este
              sitio se origina en la ciudad de Río Cuarto, Provincia de Córdoba,
              República Argentina. Por lo tanto, nosotros no hacemos ninguna
              declaración que la información en Nuestra Aplicación sea apropiada
              o disponible para su uso en cualquier lugar que no sea la
              República Argentina. El acceso a la Aplicación desde otros
              territorios está estrictamente prohibido si dicho acceso es ilegal
              en dicha jurisdicción. Usted acepta que su decisión de acceder a
              Nuestra Aplicación se realiza únicamente bajo su propia
              iniciativa, y que Usted es el único responsable en cumplir con
              todas las leyes aplicables relacionadas con dicho acceso.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>
                20.Usuarios Internacionales :
              </Text>{" "}
              No hacemos ninguna declaración que Nuestro Contenido dela
              Aplicación sea apropiado o disponible para su uso en cualquier
              jurisdicción o país que no sea Argentina. Usted no puede usar
              Nuestra Aplicación o exportar el contenido de la Aplicación en
              violación de las leyes y regulaciones de exportación de Argentina.
              Dada la naturaleza global de Internet, Usted acepta cumplir con
              todas las reglas locales (de donde usted reside físicamente)
              respecto a la conducta y el contenido de Internet. También se
              compromete a cumplir con todas las leyes aplicables a la
              transmisión de datos técnicos exportados desde Argentina o del
              país en el que Usted reside físicamente.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>21. Cookies :</Text> El
              Usuario reconoce y acepta que la aplicación móvilpodrá utilizar
              cookies para brindar a los Usuarios un servicio más completo,
              recordando sus preferencias. La información que recopile la
              Empresa podrá incluir el comportamiento de navegación, dirección
              IP, logs, y otros tipos de información. Sin embargo, la Empresa no
              recolecta información personal identificable de manera directa de
              ningún Usuario usando cookies o tags. Un cookie es un pequeño
              archivo de texto mediante el cual se puede identificar en forma
              exclusiva un navegador de internet, y que suele ser instalado,
              enviado o escrito en el ordenador de los Usuarios de internet,
              cuando los mismos ingresan a determinados sitios de internet, a
              efectos de obtener automáticamente información acerca de la
              conducta de los Usuarios cuando navegan por dichos sitios de
              internet. Un archivo cookie generalmente contendrá el nombre del
              dominio desde donde la cookie ha sido transferida, la fecha de
              creación, y un código de identificación. La única información
              personal que un cookie puede contener es información que el
              Usuario mismo suministra con su navegación por internet, tales
              como la dirección de IP, las páginas visitadas y en qué orden, el
              tiempo de permanencia en cada página, la fecha y la hora, etc. (la
              “Información de Actividad”). Un cookie no puede leer datos del
              disco duro del Usuario ni leer los archivos cookie creados por
              otros sitios de internet.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>
                22. Términos Misceláneos :
              </Text>{" "}
              Este Acuerdo constituye el acuerdo completo entre Usted y
              Nosotros, y reemplaza cualquier acuerdo anterior que haya existido
              entre Usted y Nosotros. Usted también puede estar sujeto a
              términos y condiciones que resulten aplicables cuando se utiliza
              cualquier contenido de terceros, software u otra información de
              propiedad adicionales. Si alguna de las disposiciones en virtud de
              este Acuerdo es considerada por un tribunal de jurisdicción
              competente para ser inválida o inaplicable por cualquier motivo,
              las disposiciones restantes continuarán en plena vigencia y sin
              verse menoscabadas o anuladas de forma alguna. Nuestra incapacidad
              para ejercer o hacer valer cualquier derecho o disposición de este
              Acuerdo no constituirá una renuncia a tal derecho o disposición.
              Podemos ceder nuestros derechos y obligaciones bajo este Acuerdo
              en cualquier momento y sin previo aviso. Los títulos de las
              secciones en este Acuerdo son por conveniencia solamente y no
              tienen ningún efecto legal. Toda la información relacionada con el
              empleo en esta aplicación móvil está sujeta a modificación o
              eliminación a nuestra entera discreción. Nada en esta aplicación
              móvil crea un contrato expreso o implícito de empleo o
              contratación directa o indirecta.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>23. Seguridad :</Text> Esta
              aplicación móvil toma las precauciones razonables para proteger la
              información de nuestros usuarios. Tenga en cuenta, sin embargo,
              que las transmisiones electrónicas a través de Internet no son
              necesariamente seguras de que sean interceptadas, y Nosotros no
              garantizamos la seguridad o confidencialidad de las transmisiones.
              Nos reservamos el derecho de actualizar o alterar nuestras
              prácticas de seguridad, siempre y cuando sea apropiado hacerlo. Al
              igual que con nuestros Términos y Condiciones, Usted debe
              comprobar Nuestro suministro de seguridad cada vez que visita
              Nuestra aplicación móvil para identificar y entender los cambios
              realizados desde su última visita.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>
                24. Notificaciones y alertas :
              </Text>{" "}
              El usuario acepta que LA EMPRESA envíe alertas y notificaciones al
              usuario relacionadas al uso de la aplicación móvil.{"\n\n"}
              <Text style={{ fontWeight: "bold" }}>
                25. El Usuario deberá pagar el precio en los plazos y forma
                detallados en la aplicación móvil :
              </Text>{" "}
              La mora se producirá por el mero vencimiento del plazo para el
              pago sin necesidad de interpelación judicial o extrajudicial,
              facultando a la Empresa a dar de baja la cuenta del Usuario.{"\n"}
            </Text>
          </ScrollView>
        </View>
        <View style={style.footer}>
          <Button
            title="Aceptar"
            TouchableComponent={TouchableOpacity}
            onPress={this.navigate}
            buttonStyle={style.button}
            titleStyle={style.textBold14White}
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grayLight,
  },
  body: {
    flex: 0.85,
    marginTop: 15,
    marginHorizontal: 5,
    paddingHorizontal: 15,
  },
  footer: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  scroll: {
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: COLORS.gray,
    borderRadius: 7,
    padding: 10,
    elevation: 1,
  },
  textTittle: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size18,
    color: COLORS.blue,
    textAlign: "center",
    lineHeight: 32,
  },
  textDescription: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.grayDark,
    textAlign: "center",
    marginBottom: 10,
  },
  textBold14White: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  button: {
    width: widthPercentageToDP("90%"),
    height: heightPercentageToDP("7%"),
    borderRadius: 25,
    backgroundColor: COLORS.blue,
    elevation: 1,
  },
});

export default TermsAndConditions;
