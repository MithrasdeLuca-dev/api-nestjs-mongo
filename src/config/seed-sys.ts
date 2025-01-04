import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import { UserSchema } from 'src/user/user.schema';
import { RoleTypePermission } from './auth/enum/UserType.enum';

const { SYSADMIN } = RoleTypePermission;

dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;

const sysadminData = {
  fullName: 'SYSADMIN SYSADMIN',
  mail: 'sysadmin@email.com',
  password: '1234@Test',
  changePassword: true,
  rolePermission: SYSADMIN,
  status: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

async function bootstrap() {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('Database Connected');

    const userSchemaModel = mongoose.model('user', UserSchema, 'user');

    const hashPassword = await bcrypt.hash(sysadminData.password, 10);

    const countSysAdmin = await userSchemaModel.countDocuments({
      rolePermission: SYSADMIN,
    });

    if (!countSysAdmin) {
      const newSYSAdmin = new userSchemaModel({
        ...sysadminData,
        password: hashPassword,
      });

      await newSYSAdmin.save();
      console.log(`SYSADMIN ${newSYSAdmin.fullName} created successfully.`);
    } else {
      console.log('SYSADMIN already exists.');
    }
  } catch (error) {
    console.error('Error during bootstrapping:', error);
  } finally {
    mongoose.disconnect();
  }
}

bootstrap();