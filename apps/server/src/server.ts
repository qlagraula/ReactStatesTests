import { zodiosApp } from '@zodios/express';
import { api } from 'api';
import winston from 'winston';
import expressWinston from 'express-winston';
import cors from 'cors';

const app = zodiosApp(api);
app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.cli(),
    ),
    expressFormat: true,
    colorize: true,
  }),
);
app.use(cors());

//  auto-complete path  fully typed and validated input params (body, query, path, header)
//          ▼           ▼    ▼
app.get('/users/:id', (request, res) => {
  // res.json is typed thanks to zod
  return res.json({
    //   auto-complete req.params.id
    //              ▼
    id: request.params.id,
    name: 'John Doe',
  });
});

app.listen(5000);

// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
  // eslint-disable-next-line no-console
  console.log('Started');
})();
