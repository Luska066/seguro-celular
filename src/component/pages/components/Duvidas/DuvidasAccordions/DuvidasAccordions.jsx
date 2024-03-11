import React from 'react'
import { faCheck, faChevronRight, faCircle, faCircleDot, faHouse, faPlus } from '@fortawesome/free-solid-svg-icons'
import Colors from '../../../../common/Colors'
// import './index.css'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function DuvidasAccordions(){
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    return(
        <div className='flex flex-col items-center justify-center'>
        <ul className='
          flex 
          items-center
          self-start
          pl-[20%]
          gap-2 
          pb-[40px] 
          pt-[40px] 
          ulDuvidasAccordions
          '>
          <div className='flex items-center gap-2'>
            
            <li>
              <FontAwesomeIcon color={Colors().navyBlue} icon={faHouse} />
            </li>
            <li
              className='relative liSecurityPhone flex items-center gap-1'
              style={{ color: Colors().navyBlue }}>
              <a href="#" style={{ color: Colors().navyBlue}}>
                Seguro Celular
              </a>
            </li>
          </div>
          <li
            id='li2Duvidas'
            className='
            relative 
            liDuvidas 
            flex 
            items-center 
            gap-1'
            style={{ color: Colors().blue }}>
            Dúvidas frequentes
          </li>
        </ul>
        <article className='border-t pb-10 pt-2 w-[1000px] rounded-none  border-blue-400 articleDuvidasAccordion'>
          {/* 001 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'} >O seguro possui franquia?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography
                color={Colors().navyBlue}>
                Sim. A franquia é o valor ou participação definido no momento da contratação do produto. A ideia é que o valor do seguro fique mais barato e que o pagamento da franquia só aconteça em caso de acionamento do seguro. Se durante a vigência do contrato nenhuma cobertura for utilizada, então não haverá a cobrança de franquia.
              </Typography>
              <Typography paddingTop={2} paddingBottom={2} color={Colors().navyBlue}>
                Por exemplo:
              </Typography>
              <Typography color={Colors().navyBlue}>
                Para um celular com valor de R$ 1.000,00 e franquia reduzida:
              </Typography>
              <ul className='ps-5 pt-5 flex flex-col gap-6' style={{ color: Colors().navyBlue }}>
                <li >
                  <FontAwesomeIcon color={Colors().navyBlue} style={{ paddingRight: 15 }} icon={faCheck} />
                  Ao acionar a cobertura de danos, independentemente do custo do reparo, o conserto é realizado mediante o pagamento no valor de R$ 250,00 (franquia definida no momento da contratação).
                </li>
                <li>
                  <FontAwesomeIcon color={Colors().navyBlue} style={{ paddingRight: 15 }} icon={faCheck} />
                  Ao acionar a cobertura de roubo ou furto qualificado, para a reposição do aparelho por um modelo seminovo, similar ou igual ao bem, é necessário o pagamento no valor de R$ 250,00 (franquia definida no momento da contratação).
                </li>
              </ul>
              <Typography paddingTop={2} paddingBottom={2} color={Colors().navyBlue}>
                Lembrando que os exemplos acima são hipotéticos. ;)
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 002 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>O seguro possui carência? O que isso significa?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
                Não, a ativação da proteção é na hora. O período de carência é o tempo, estabelecido pela seguradora, que deve decorrer a partir do momento da contratação do seguro para que a cobertura seja efetiva. Isso significa que durante esse período a seguradora fica isenta de qualquer responsabilidade indenizatória.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 003 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Quais são as opções de cobertura?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
                Oferecemos dois planos para você escolher o que mais combina com você:
              </Typography>
              <div style={{ paddingTop: 20 }}>
                <Typography fontWeight={"bold"} color={Colors().navyBlue}>
                  Plano econômico:
                </Typography>
                <ul className='pt-3'>
                  <li style={{ fontSize: 16, color: Colors().navyBlue }}>
                    <FontAwesomeIcon
                      style={{ paddingRight: 10 }}
                      color={Colors().navyBlue}
                      icon={faChevronRight}
                    />
                    Furto
                  </li>
                  <li style={{ fontSize: 16, color: Colors().navyBlue }}>
                    <FontAwesomeIcon
                      style={{ paddingRight: 10 }}
                      color={Colors().navyBlue}
                      icon={faChevronRight}
                    />
                    Roubo
                  </li>
                </ul>
              </div>
              <div style={{ paddingTop: 20 }}>
                <Typography fontWeight={"bold"} color={Colors().navyBlue}>
                  Plano completo:
                </Typography>
                <ul className='pt-3'>
                  <li style={{ fontSize: 16, color: Colors().navyBlue }}>
                    <FontAwesomeIcon
                      style={{ paddingRight: 10 }}
                      color={Colors().navyBlue}
                      icon={faChevronRight}
                    />
                    Furto
                  </li>
                  <li style={{ fontSize: 16, color: Colors().navyBlue }}>
                    <FontAwesomeIcon
                      style={{ paddingRight: 10 }}
                      color={Colors().navyBlue}
                      icon={faChevronRight}
                    />
                    Roubo
                  </li>
                  <li style={{ fontSize: 16, color: Colors().navyBlue }}>
                    <FontAwesomeIcon
                      style={{ paddingRight: 10 }}
                      color={Colors().navyBlue}
                      icon={faChevronRight}
                    />
                    Danos Materiais
                  </li>
                </ul>
              </div>
              <Typography paddingBottom={2} paddingTop={2} color={{ color: Colors().navyBlue }}>Clique <a href='#' style={{ color: Colors().blue }}>aqui</a> para saber mais detalhes sobre o seguro Zurich Celular</Typography>
            </AccordionDetails>
          </Accordion>
          {/* 004 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Como faço para acionar o seguro?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
                Antes de começar o processo, certifique-se de que já fez os dois procedimentos abaixo:
              </Typography>
              <ul className='pt-5 ms-5 flex flex-col gap-5' style={{ color: Colors().navyBlue }}>
                <li>
                  <FontAwesomeIcon color={Colors().navyBlue}
                    style={{ fontSize: 7, paddingRight: 10, alignSelf: "center" }} icon={faCircle} />
                  <strong style={{ paddingRight: 5 }}>
                    Bloqueio do IMEI (número de identificação global e único para cada telefone celular):
                  </strong>
                  Entrar em contato com a sua operadora e solicitar o bloqueio do IMEI e de sua linha.
                </li>
                <li>
                  <FontAwesomeIcon color={Colors().navyBlue}
                    style={{ fontSize: 7, paddingRight: 10, alignSelf: "center" }} icon={faCircle} />
                  <strong style={{ paddingRight: 5 }}>
                    Boletim de Ocorrência:
                  </strong>
                  Registrado na delegacia, do bem roubado ou furtado, o BO deve conter local, data, hora e identificação do produto (marca, modelo e IMEI).
                </li>
              </ul>
              <Typography color={Colors().navyBlue} paddingTop={3}>
                Feito isso, é só entrar em contato com a gente usando um dos canais abaixo:
              </Typography>
              <ul className='pt-5 ms-5 flex flex-col gap-5' style={{ color: Colors().navyBlue }}>
                <li className='flex'>
                  <FontAwesomeIcon color={Colors().navyBlue}
                    style={{ fontSize: 7, paddingRight: 10, alignSelf: "center" }} icon={faCircle} />
                  Fale com a Laiz no WhatsApp clicando <a href='#' style={{ color: Colors().blue, paddingLeft: 5 }}>aqui</a>
                </li>
                <li className='flex'>
                  <FontAwesomeIcon color={Colors().navyBlue}
                    style={{ fontSize: 7, paddingRight: 10, alignSelf: "center" }} icon={faCircle} />
                  Fale com a Laiz no WhatsApp clicando <a href='#' style={{ color: Colors().blue, paddingLeft: 5 }}>aqui</a>
                </li>
                <li className='flex'>
                  <FontAwesomeIcon color={Colors().navyBlue}
                    style={{ fontSize: 7, paddingRight: 10, alignSelf: "center" }} icon={faCircle} />
                  Acesse o  <a href='#' style={{ color: Colors().blue, paddingLeft: 5, paddingRight: 5 }}>Espaço do Cliente</a> e realize o passo a passo:
                </li>
              </ul>
              <Typography paddingTop={2} color={Colors().navyBlue}>
                <ul>
                  <li />1.Caso não possua acesso, clique em “Cadastre-se”;
                  <li />2. Selecione o seguro que você tem com a Zurich;
                  <li />3. Preencha o formulário com seus dados pessoais;
                  <li />4. Pronto. Será enviado um e-mail para confirmar seu cadastro.
                  <li />5. Após login, na página inicial, procure na lista o seguro Zurich Celular;
                  <li />6. Clique em “Acionar Seguro” e em seguida o tipo de cobertura;
                  <li />7. Confira seus dados pessoais e clique em “Continuar”. Importante: certifique-se que o e-mail e telefone de contato estejam atualizados;
                  <li />8. Em seguida selecione a forma como deseja ser contatado, SMS ou e-mail, e descreva o que aconteceu com o produto, quando e onde, vide o Boletim de Ocorrência;
                  <li />9. Depois anexe os documentos solicitados;
                  <li /> 10. Clique em “Finalizar” para concluir a abertura do seu sinistro e esteja ciente da cobrança da franquia, conforme contrato do seu seguro.
                </ul>
              </Typography>
              <Typography color={Colors().navyBlue} paddingTop={2}>
                Sua solicitação será analisada e você receberá um e-mail da Zurich com os próximos passos do seu processo.
              </Typography>
              <ul className='pt-5' style={{ color: Colors().navyBlue }}>
                <li className='flex'>
                  <FontAwesomeIcon color={Colors().navyBlue}
                    style={{ fontSize: 7, paddingRight: 10, paddingLeft: 20, alignSelf: "center" }} icon={faCircle} />
                  Ou ligue para a nossa Central de Atendimento nos números :
                </li>
              </ul>
              <Typography color={Colors().navyBlue} fontWeight={"bold"} paddingTop={3}>
                Central de Atendimento
              </Typography>
              <ul className='pt-5'>
                <li className='flex' style={{ color: Colors().navyBlue }}>
                  <FontAwesomeIcon color={Colors().navyBlue}
                    style={{ fontSize: 7, paddingRight: 10, paddingLeft: 20, alignSelf: "center" }} icon={faCircle} />
                  Acionar seguro, acompanhamento do processo de acionamento do seguro e informações da apólice/certificado.
                </li>
              </ul>
              <Typography color={Colors().navyBlue} fontWeight={"bold"} paddingTop={3}>
                Telefones:
              </Typography>
              <Typography paddingTop={1} color={Colors().navyBlue}>
                4020 4848 (capitais e regiões metropolitanas)
              </Typography>
              <Typography color={Colors().navyBlue}>
                0800 285 4141 (demais localidades)
              </Typography>
              <Typography color={Colors().navyBlue}>
                Horário de atendimento: segunda a sexta-feira 8h às 20h / aos sábados 8h às 18h, exceto feriados nacionais
              </Typography>

              <Typography paddingTop={2} color={Colors().navyBlue} fontWeight={"bold"} >
                SAC / Deficientes Auditivos
              </Typography>
              <Typography paddingTop={1} color={Colors().navyBlue}>
                Para informações, reclamações ou cancelamentos:
                Atendimento 24h por dia, 7 dias por semana
              </Typography>

              <Typography paddingTop={2} color={Colors().navyBlue} fontWeight={"bold"}>
                Telefone:
              </Typography>
              <Typography paddingTop={1} color={Colors().navyBlue}>
                SAC: 0800 284 4848
              </Typography>

              <Typography paddingTop={2} color={Colors().navyBlue} fontWeight={"bold"}>
                Canal exclusivo para deficientes auditivos:
              </Typography>
              <Typography paddingTop={1} color={Colors().navyBlue}>
                Atendimento 24h por dia, 7 dias por semana
              </Typography>
              <Typography paddingTop={1} color={Colors().navyBlue}>
                Lembrando que as ligações devem ser feitas a partir de um TTS (terminal telefônico para surdos)
              </Typography>

              <Typography paddingTop={2} color={Colors().navyBlue} fontWeight={"bold"}>
                Telefone:
              </Typography>
              <Typography paddingTop={1} color={Colors().navyBlue}>
                Deficiente auditivo: 0800 275 8585
              </Typography>

              <Typography paddingTop={3} paddingBottom={3} color={Colors().navyBlue}>
                Para acompanhar o status da sua solicitação, fale com nossa assistente virtual pelo WhatsApp ou chat on-line ou acesse o Espaço Cliente, escolha no menu “Sinistro” e depois “Acompanhamento”.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 005 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Como faço para acionar o seguro?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
                O seguro Zurich Celular tem contratação 100% digital e oferece coberturas completas para você usar o seu aparelho com tranquilidade em qualquer lugar do mundo. Ah, o seguro celular da Zurich não possui carência.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 006 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Seguro de celular vale a pena?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
                Proteção e segurança nunca é demais, afinal, imprevistos acontecem e nada como estar amparado nesses momentos, não é mesmo? O seguro celular traz mais tranquilidade para você usar seu celular como e onde quiser, sem preocupação.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 007 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Como faço para contratar o seguro?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
                Para contratar o seguro é simples:
              </Typography>
              <Typography fontSize={18} paddingLeft={4} paddingTop={2} color={Colors().navyBlue}>
                1. Selecione marca, modelo e memória do seu aparelho de celular
              </Typography>
              <Typography fontSize={18} paddingLeft={4} paddingTop={2} color={Colors().navyBlue}>
                2. Escolha o plano (econômico ou completo)
              </Typography>
              <Typography fontSize={18} paddingLeft={4} paddingTop={2} color={Colors().navyBlue}>
                3. Preencha seus dados cadastrais
              </Typography>
              <Typography fontSize={18} paddingLeft={4} paddingTop={2} color={Colors().navyBlue}>
                4. Instale e realize a vistoria pelo APP Zurich Vistoria Celular
              </Typography>
              <Typography fontSize={18} paddingLeft={4} paddingTop={2} color={Colors().navyBlue}>
                5. Com a vistoria aprovada, preencha os dados para pagamento e pronto!
              </Typography>
              <Typography paddingTop={4} color={Colors().navyBlue}>
                Pronto! Fácil, prático e seguro.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 008 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>  Quais as formas de pagamento?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
                Você pode pagar o seguro utilizando o seu cartão de crédito.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 009 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>  O que o seguro não cobre?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
                Acessórios ou ainda aparelhos celulares com mais de 2 anos de uso que não estejam disponíveis no cotador Zurich.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 010 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>  É valido para celulares novos e usados?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
                O Zurich Celular é válido para celulares novos e usados, com até 2 anos da data da compra, e para os modelos disponíveis no cotador.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 011 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Não encontrei a marca, o modelo e/ou a memória do meu celular, o que faço?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
                Fique de olho no nosso site, estamos sempre trazendo novidades! Buscamos atender o maior número de celulares e atualmente contamos com mais de 400 modelos disponíveis para contratação do seguro.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 012 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Posso contratar o seguro para mais de um celular?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
                Sim! Você pode adquirir mais de um seguro celular com o mesmo CPF, desde que sejam aparelhos e números diferentes, ok?
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 013 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Quais documentos são necessários para acionar o seguro?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
                Para acionar o seguro, são necessários cópia do Boletim de Ocorrência Policial com os dados do modelo, marca e IMEI do aparelho sinistrado.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 014 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Como será feita a reposição do meu celular?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
                Quando necessária a reposição do seu aparelho será ofertada um aparelho igual ou similar, podendo ser seminovo, remanufaturado ou recondicionado. Caso haja um eventual upgrade no modelo do celular o cliente deverá pagar a diferença.
              </Typography>
              <Typography paddingTop={2} color={Colors().navyBlue}>
                Na impossibilidade de reposição do celular por modelo igual ou similar e mediante acordo entre as partes, a indenização devida poderá ser feita em dinheiro.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 015*/}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Como faço para cancelar o seguro?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
                Para cancelar o seu seguro acesse os nossos <a href="#" style={{ color: Colors().blue }}>canais de atendimento.</a>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 016 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>O que é IMEI?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
                O código IMEI (International Mobile Equipment Identity ou Identificação Internacional de Equipamento Móvel, em português) é o número padrão presente nos aparelhos celulares.
              </Typography>
              <Typography paddingTop={2} color={Colors().navyBlue}>
                Para encontrar o seu código IMEI basta abrir o teclado de chamadas do seu celular e digitar *#06#*.
              </Typography>
              <Typography paddingTop={2} color={Colors().navyBlue}>
                Assista ao vídeo e saiba como localizar o IMEI do seu celular.
              </Typography>
              <Box paddingTop={3} className="w-[70%] h-[400px] boxIframe">
                <ReactPlayer
                  controls={true}
                  // maxHeight={'500px'}
                  // width={"100%"}
                  width={'100%'}
                  height={'100%'}
                  url='https://www.youtube.com/watch?v=baIrfoWpV2E'
                />
              </Box>
            </AccordionDetails>
          </Accordion>
          {/* 017 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Como descobrir qual o modelo e a memória do meu celular?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
                Caso você tenha um iPhone, procure pela opção “Ajustes”, depois em “Geral” e por último, clique em “Sobre”. Nesta tela, você descobrirá o modelo do seu aparelho em “Nome do Modelo” e a memória em “Capacidade”
              </Typography>
              <Typography paddingTop={2} color={Colors().navyBlue}>
                Se você tiver um Android, busque por “Configurações” ou “Ajustes” (podendo haver variações dependendo do celular), e então vá em “Sobre o telefone”. Nesta tela, você verá o modelo do seu celular. Já para descobrir a memória, também vá em “Configurações” ou “Ajustes” e então em “Armazenamento”. Então, busque pela capacidade total de memória.
              </Typography>
              <Typography paddingTop={2} color={Colors().navyBlue}>
                Assista aos vídeos abaixo para ver um tutorial de como descobrir o modelo e a memória do seu celular para realizar a cotação do seguro corretamente!
              </Typography>
              <Box paddingTop={0} display={"flex"} flexDirection={"row"} flexWrap={"wrap"} width={"100%"}   justifyContent={"space-around"}>
                <Box  >
                <Typography color={ Colors().navyBlue } fontSize={50}>
                    Android
                  </Typography>
                  <ReactPlayer
                  width={480}
                    controls={true}
                    url='https://www.youtube.com/watch?v=baIrfoWpV2E'
                  />
                </Box>
                <Box  >
                  <Typography color={ Colors().navyBlue } fontSize={50}>
                    iOS
                  </Typography>
                  <ReactPlayer
                      width={480}
                    controls={true}
                    url='https://www.youtube.com/watch?v=baIrfoWpV2E'
                  />
                </Box>

              </Box>
            </AccordionDetails>
          </Accordion>
          {/* 018 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>É possível contratar o seguro para um celular importado?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
              Se o modelo do celular estiver incluído na lista de aparelhos elegíveis, que pode ser vista ao simular uma contratação em nosso cotador, é possível seguir com a contratação. Mesmo assim, o segurado precisa residir no Brasil.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 019 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Em caso de troca de aparelho, como funciona o endosso?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
              Não há endosso por troca de aparelho. O seguro pode ser cancelado, onde realizaremos a restituição pró-rata ao segurado na fatura de seu cartão e o cliente poderá contratar um novo seguro para o novo aparelho.
              </Typography>
            </AccordionDetails>
          </Accordion>
           {/* 020 */}
           <Accordion className='border-b border-blue-400' expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>É possível contratar o seguro para tablets, smartwatches, notebooks ou outros aparelhos eletrônicos?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
              Não. Atualmente, o seguro é valido apenas para celulares.
              </Typography>
            </AccordionDetails>
          </Accordion>
           {/* 021 */}
           <Accordion className='border-b border-blue-400' expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>É permitido contratação de seguro para 2 (dois) aparelhos distintos, ainda que da mesma marca, modelo e memória para o mesmo CPF?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
              Sim. Desde que o IMEI seja diferente.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 022 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Caso eu tenha comprado 2 (dois) aparelhos de mesma marca, modelo e memória na mesma nota fiscal (NF), como faço para contratar seguro para ambos dispositivos?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
              O seguro deve estar em nome de quem utiliza o aparelho, assim, neste caso, é preciso usar um documento (CPF) para cada dispositivo e emitir dois seguros. Importante: a contratação é permitida somente para maiores de 18 anos.
              </Typography>
            </AccordionDetails>
          </Accordion>
           {/* 023 */}
           <Accordion className='border-b border-blue-400' expanded={expanded === 'panel23'} onChange={handleChange('panel23')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Caso aconteça de quebrar a tela e depois o celular cair na piscina, a franquia deverá ser paga duas vezes?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
              Sim, cada vez que acionar o sinistro precisa pagar a franquia.
              </Typography>
            </AccordionDetails>
          </Accordion>
           {/* 024*/}
           <Accordion className='border-b border-blue-400' expanded={expanded === 'panel24'} onChange={handleChange('panel24')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>É preciso esperar algum prazo entre um acionamento do seguro e outro?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
              Não. Você pode acionar o seguro novamente logo após o término de um outro processo de sinistro.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 025 */}
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel25'} onChange={handleChange('panel25')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={`text-[26px] rounded-none shadow-none`}
            >
              <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Quantas vezes posso acionar o seguro durante a vigência da apólice?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography color={Colors().navyBlue}>
              Durante a vigência do contrato você pode acionar o seguro 2 vezes ou até atingir o valor da importância segurada (IS).
              </Typography>
            </AccordionDetails>
          </Accordion>
        </article>
      </div>
    )
}