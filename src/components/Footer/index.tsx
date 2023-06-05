export default function Footer() {
    return (
      <div className="pt-16">
      <div className="flex-row mx-auto max-w-[1920px] px-3 bg-gray-100 rounded-sm" >
        <div className="flex grid-cols-1 gap-4 border-b py-3 text-gray-600 transition-colors duration-150 bg-gray-100">
          <div className=" justify-center col-span-1 lg:col-span-1">
            <h2>  <b>Contato</b>  </h2>
            <div>
              <h3>E-mail</h3>
              <h3>Telefone</h3>
              <h3>Whatsapp</h3>
            </div>
          </div>
          <div className="justify-center col-span-1 lg:col-span-1">
          <h2>  <b>Menu</b>   </h2>
            <div>
              <h3>Login</h3>
              <h3>Cadastro</h3>
            </div>
          </div>

        </div>
        <div className="col-span-1 lg:col-span-6 flex items-start lg:justify-start text-black">
          </div>
        <div className="flex py-4 flex-col md:flex-row justify-center items-center space-y-1 bg-gray-100">
          <div>
            <span><h1 className='text-gray-500 '> &copy; WIL TICKETS, 2023. Todos os direitos reservados.</h1></span>
          </div>
        </div>
      </div>
      </div>
    );
}