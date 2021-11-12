import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { MoviesService } from './movies/movies.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
