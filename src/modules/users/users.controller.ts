import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('')
  async getUsers(): Promise<any[]> {
    return await this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<any> {
    try {
      return await this.userService.getUserById(id);
    } catch (error) {
      if (error.status)
        throw new HttpException(error.message, error.getStatus());
      else throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('createUser')
  async createUser(@Body() userData: any): Promise<any> {
    try {
      return await this.userService.createUser(userData);
    } catch (error) {
      if (error.status)
        throw new HttpException(error.message, error.getStatus());
      else throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put('updateUser/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updatedUserData: any,
  ): Promise<any> {
    try {
      return await this.userService.updateUser(id, updatedUserData);
    } catch (error) {
      if (error.status)
        throw new HttpException(error.message, error.getStatus());
      else throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete('deleteUser/:id')
  async deleteUser(@Param('id') id: string): Promise<any> {
    try {
      return await this.userService.deleteUser(id);
    } catch (error) {
      if (error.status)
        throw new HttpException(error.message, error.getStatus());
      else throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
