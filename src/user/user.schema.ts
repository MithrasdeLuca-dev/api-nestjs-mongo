import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {

  @Prop({ required: true })
    fullName: string;

  @Prop({ required: true })
    mail: string;

  @Prop({ required: true })
    password: string;

  @Prop({ required: true, default: false })
    changePassword: boolean;

  @Prop({ required: true, default: true })
    status: boolean;

  @Prop({ type: Date, require: true, default: Date.now })
    createdAt: Date;

  @Prop({ type: Date, require: true, default: Date.now })
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
