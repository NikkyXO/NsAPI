/* eslint-disable prettier/prettier */
import { AuthGuard } from "@nestjs/passport";


export class LocalAUthGuard extends AuthGuard('local') {}