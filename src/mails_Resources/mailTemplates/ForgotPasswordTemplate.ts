export const ForgotPassword = (username: string, token: string) => {
  return `<figure class="table" style="width: 100%; text-align: center;">
      <table style="background-color: rgb(255, 255, 255); margin: 0 auto;">
        <tbody>
          <tr>
            <td style="padding: 20px 20px 40px;">
              <figure class="table" style="width: 100%;">
                <table style="border-color: rgb(84, 91, 94); margin: 0 auto;">
                  <tbody>
                    <tr>
                      <td>
                        <h2 style="margin-left: 0; text-align: center;"><strong>Olá, ${username}</strong></h2>
                        <p style="margin-left: 0; text-align: center;">Clique no link abaixo para criar uma nova senha</p>
                         <figure class="table" style="width: 100%; text-align: center;">
                          <table style="border-color: rgb(84, 91, 94); margin: 0 auto;">
                            <tbody>
                              <tr>
                                <td style="padding-bottom: 0; text-align: center;">
                                  <figure class="table" style="width: auto;">
                                    <table style="border-color: rgb(84, 91, 94); margin: 0 auto;">
                                      <tbody>
                                        <tr>
                                          <td style="background-color: rgb(224, 60, 0); text-align: center;">
                                            <!-- Aqui está a correção -->
                                            <a href="https://localhost:3000/forgot-password/${token}" style="color: #fff; text-decoration: none; display: inline-block; padding: 10px 20px; background-color: rgb(224, 60, 0); border-radius: 5px;"><strong>CRIAR UMA SENHA</strong></a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </figure>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </figure>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </figure>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>`;
};
