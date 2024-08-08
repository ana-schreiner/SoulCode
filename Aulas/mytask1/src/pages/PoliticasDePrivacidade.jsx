import Accordion from 'react-bootstrap/Accordion';


function PolíticasDePrivacidade() {
    return (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header> Coleta de Informações Pessoais</Accordion.Header>
            <Accordion.Body>
            Nossa política de privacidade visa informar como coletamos, utilizamos e protegemos as informações pessoais dos nossos usuários. Respeitamos a privacidade de todos e estamos comprometidos em proteger as informações fornecidas.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Uso de Cookies</Accordion.Header>
            <Accordion.Body>
            Utilizamos cookies para melhorar a experiência de navegação dos nossos usuários. Os cookies são pequenos arquivos de texto armazenados no navegador que nos permitem reconhecer e lembrar informações sobre você. Ao continuar navegando no nosso site, você concorda com o uso de cookies conforme descrito na nossa política de privacidade.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    );
}

export default PolíticasDePrivacidade;