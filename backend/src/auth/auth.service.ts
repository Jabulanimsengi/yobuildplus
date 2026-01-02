import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto, LoginDto, OAuthLoginDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) { }

    async register(registerDto: RegisterDto) {
        // Check if user exists
        const existingUser = await this.prisma.user.findUnique({
            where: { email: registerDto.email },
        });

        if (existingUser) {
            throw new ConflictException('Email already in use');
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(registerDto.password, 10);

        // Create user
        const user = await this.prisma.user.create({
            data: {
                email: registerDto.email,
                password: hashedPassword,
                name: registerDto.name,
                role: 'contractor',
            },
        });

        const { password, ...result } = user;
        const token = this.jwtService.sign({ sub: user.id, email: user.email, role: user.role });

        return {
            user: result,
            token,
        };
    }

    async login(loginDto: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: { email: loginDto.email },
            include: { builder: true },
        });

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const { password, ...result } = user;
        const token = this.jwtService.sign({ sub: user.id, email: user.email, role: user.role });

        return {
            user: result,
            token,
        };
    }

    async oauthLogin(oauthDto: OAuthLoginDto) {
        // Find or create user by email
        let user = await this.prisma.user.findUnique({
            where: { email: oauthDto.email },
            include: { builder: true },
        });

        let isNewUser = false;

        if (!user) {
            isNewUser = true;
            // Create new user for OAuth
            // Generate a random password for OAuth users (they won't use it)
            const randomPassword = await bcrypt.hash(Math.random().toString(36), 10);

            user = await this.prisma.user.create({
                data: {
                    email: oauthDto.email,
                    password: randomPassword,
                    name: oauthDto.name,
                    role: oauthDto.role || 'client',
                },
                include: { builder: true },
            });
        }

        const { password, ...result } = user;
        const token = this.jwtService.sign({ sub: user.id, email: user.email, role: user.role });

        return {
            user: {
                ...result,
                builderId: user.builder?.id,
            },
            token,
            isNewUser, // True if user was just created, false if returning user
        };
    }

    async getMe(userId: string) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { builder: true },
        });

        if (!user) {
            throw new UnauthorizedException();
        }

        const { password, ...result } = user;
        return result;
    }
}

