import axios, { AxiosResponse } from "axios";
export const SearchCep = (cep: string): Promise<AxiosResponse> =>
  axios.post(
    "https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente",
    `
<?xml version="1.0"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cli="http://cliente.bean.master.sigep.bsb.correios.com.br/">
  <soapenv:Header />
    <soapenv:Body>
        <cli:consultaCEP>
              <cep>${cep}</cep>
        </cli:consultaCEP>
    </soapenv:Body>
</soapenv:Envelope>`.trim(),
    { headers: { "content-type": "text/xml;charset=UTF-8" } }
  );
