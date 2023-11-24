import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';

import { Container, Content, NewMovie, SectionHeader } from "./styles";

export function Home() {
  return(
    <Container>
      <Header />
      <main>
        <SectionHeader>
          <p>Meus filmes</p>
          <NewMovie to="/new">
            <FiPlus />
            Adicionar filme
          </NewMovie>
        </SectionHeader>

        <Content>
          <Movie data={{
              title: 'Senhor dos Anéis: A Sociedade do Anel',
              rating: 5,
              text: 'Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel.',
              tags: [
                { id: '1', name: 'Aventura' },
                { id: '2', name: 'Fantasia' }
              ]
            }}
          />
          <Movie data={{
              title: 'Dinossauro',
              rating: 5,
              text: 'Esta é a história de Aladar, um adorável dinossauro iguanodonte criado por uma família de lêmures. Seu mundo vira de cabeça para baixo quando meteoros caem na Terra, transformando o que era verde e vibrante em um triste e perigoso deserto. Juntando-se a um rebanho de outros herbívoros, eles começam uma caminhada para encontrar um novo lar, lugar no qual a água e a vegetação ainda sejam abundantes.',
              tags: [
                { id: '1', name: 'Aventura' },
                { id: '2', name: 'Fantasia' },
                { id: '3', name: 'Animação' },
              ]
            }}
          />
          <Movie data={{
              title: 'Alien: Oitavo Passageiro',
              rating: 4,
              text: 'Uma nave espacial, ao retornar para Terra, recebe estranhos sinais vindos de um asteroide. Enquanto a equipe investiga o local, um dos tripulantes é atacado por um misterioso ser. O que parecia ser um ataque isolado se transforma em um terror constante, pois o tripulante atacado levou para dentro da nave o embrião de um alienígena, que não para de crescer e tem como meta matar toda a tripulação.',
              tags: [
                { id: '1', name: 'Aventura' },
                { id: '2', name: 'Ficcção Científica' }
              ]
            }}
          />                                        
        </Content>
      </main>
      
      
    </Container>
  );
};