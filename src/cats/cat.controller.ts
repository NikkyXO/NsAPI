import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  Redirect,
  Req,
  Res,
  UsePipes,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { Request, Response } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCatDto, createCatSchema } from './dtos/create-cat.dto';
import { ZodValidationPipe } from '../examples/customValidationPipes';
import { ValidationPipe } from '../examples/customClassValidator';

@Controller('cats')
export class CatController {
  constructor(private readonly appService: CatService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getAll(@Req() request: Request, @Res() res: Response) {
    const params = request.params;
    res.json({ msg: `This is all cats! ${params.email}` }).send();
  }

  @Post('create-cat')
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(@Res() res: Response) {
    return res.status(HttpStatus.CREATED).send();
  }

  @Get()
  @Redirect('cats/create-cat', 301)
  addCat(@Query('version') version: string) {
    if (version && version == '5') {
      // Returned values will override any arguments passed to the @Redirect()
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Put(':id')
  findOne(@Param() params: CreateCatDto): string {
    console.log(params.age);
    return `this route returns a #${params.age} cat`;
  }

  @Get()
  findAll(): Observable<any[]> {
    return of([]);
  }

  // To maintain compatibility with Nest features that depend on Nest standard response handling,
  // set the passthrough option to true
  @Get()
  findAllCats(
    @Req() request: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const age = request.params.age;
    res
      .status(HttpStatus.OK)
      .json({ msg: `this route returns a #${age} cat` })
      .send();
  }

  @Get()
  async getAllWhiteCats() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get()
  async findAllBlackCats() {
    try {
      //
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
  // Using the above, this is how the response would look:
  // {
  //   "status": 403,
  //   "error": "This is a custom message"
  // }

  // Using Pipes

  @Get('new/:id')
  async findOneCat(@Param('id', ParseIntPipe) id: number) {
    // return this.catsService.findOne(id);
    return id;
  }

  //  built-in pipe's behavior by passing options
  @Get(':id')
  async findOneWhiteCate(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    // return this.catsService.findOne(id);
    return id;
  }

  @Get(':uuid')
  async findOneBlackCat(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    // return this.catsService.findOne(uuid);
    return uuid;
  }

  // Using Zod Custom Validations Pipes
  @Post()
  @UsePipes(new ZodValidationPipe(createCatSchema))
  async createCat(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    // this.catsService.create(createCatDto);
  }
  // zod library requires the strictNullChecks configuration to be enabled in your tsconfig.json file.

  // Using custom class Validation
  @Post()
  async createBlackCat(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    // this.catsService.create(createCatDto);
    console.log(createCatDto);
  }
}
