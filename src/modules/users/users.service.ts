import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<any>) {}

  async getUsers(): Promise<any[]> {
    return await this.userModel.find().exec();
  }

  async getUserById(userId: string): Promise<any> {
    return await this.userModel.findById(userId).exec();
  }

  async createUser(userData: any): Promise<any> {
    const newUser = new this.userModel(userData);
    return await newUser.save();
  }

  async updateUser(userId: string, updatedUserData: any): Promise<any> {
    return await this.userModel.findByIdAndUpdate(userId, updatedUserData, {
      new: true,
    });
  }

  async deleteUser(userId: string): Promise<any> {
    return await this.userModel.findByIdAndDelete(userId);
  }
}
