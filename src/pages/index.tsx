// Layout imports
import { BasicLayout } from '../layouts';

// Component imports
import { Carousel, GameCard, Grid, Heading } from '@/components';

export default function Home() {
  return (
    <>
      <BasicLayout>

        <Carousel
          images={[
            '/casino-banner.png',
            '/poker-banner.png',
            '/sports-banner.png'
          ]}
        />

        {/* Recomended games content */}
        <Heading title="Recomended Games" />
        <Grid>
          <GameCard
            title='Cai Fu Dai Panda'
            image='/game-covers/cai-fu-dai-panda.webp'
            url='/slots/cai-fu-dai-panda'
          />

          <GameCard
            title='Cai Fu Dai Panda'
            image='/game-covers/cai-fu-dai-panda.webp'
            url='/slots/cai-fu-dai-panda'
          />

          <GameCard
            title='Cai Fu Dai Panda'
            image='/game-covers/cai-fu-dai-panda.webp'
            url='/slots/cai-fu-dai-panda'
          />

          <GameCard
            title='Cai Fu Dai Panda'
            image='/game-covers/cai-fu-dai-panda.webp'
            url='/slots/cai-fu-dai-panda'
          />
        </Grid>

        {/* Favourite games content */}
        <Heading title="Casino Favourites" />
        <Grid>
          <GameCard
            title='Cai Fu Dai Panda'
            image='/game-covers/cai-fu-dai-panda.webp'
            url='/slots/cai-fu-dai-panda'
          />

          <GameCard
            title='Cai Fu Dai Panda'
            image='/game-covers/cai-fu-dai-panda.webp'
            url='/slots/cai-fu-dai-panda'
          />

          <GameCard
            title='Cai Fu Dai Panda'
            image='/game-covers/cai-fu-dai-panda.webp'
            url='/slots/cai-fu-dai-panda'
          />

          <GameCard
            title='Cai Fu Dai Panda'
            image='/game-covers/cai-fu-dai-panda.webp'
            url='/slots/cai-fu-dai-panda'
          />
        </Grid>

      </BasicLayout>
    </>
  );
}
