import { Input } from "../Input";
import { Container, Logo, Search, Profile } from "./styles";

export function Header() {
  return(
    <Container>
      <Logo>RocketMovies</Logo>
      <Search>
        <Input 
          type="text" 
          placeholder="Pesquisar pelo título"
        />
      </Search>
      <Profile to="/profile">
        <div>
          <strong>Guilherme Totti</strong>
          <span>Sair</span>
        </div>

        <img 
          src="https://github.com/guitotti.png"
          alt="Foto do perfil do usuário"
        />
      </Profile>
    </Container>
  );
};