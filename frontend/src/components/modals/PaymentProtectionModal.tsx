'use client';

import { Shield, CheckCircle, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from '@/components/ui/dialog';

interface PaymentProtectionModalProps {
    children?: React.ReactNode;
}

export function PaymentProtectionModal({ children }: PaymentProtectionModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children || (
                    <Button variant="link" className="text-xs text-emerald-600 p-0 h-auto font-normal hover:underline">
                        Learn about protection
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <div className="mx-auto bg-emerald-100 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-emerald-600" />
                    </div>
                    <DialogTitle className="text-center text-xl">Yobuildplus Payment Protection™</DialogTitle>
                    <DialogDescription className="text-center">
                        Your money is held safely in escrow until the job is done.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                        <Lock className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <div>
                            <h4 className="font-semibold text-sm text-slate-800">1. Pay securely</h4>
                            <p className="text-xs text-slate-500">
                                You pay Yobuildplus, not the contractor directly. We hold the funds in a regulated trust account.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <div>
                            <h4 className="font-semibold text-sm text-slate-800">2. Contractor starts work</h4>
                            <p className="text-xs text-slate-500">
                                The contractor sees the funds are secured and starts the project with confidence.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                        <div className="h-5 w-5 rounded-full border-2 border-emerald-600 flex items-center justify-center text-[10px] font-bold text-emerald-600 mt-0.5">
                            R
                        </div>
                        <div>
                            <h4 className="font-semibold text-sm text-slate-800">3. Release on satisfaction</h4>
                            <p className="text-xs text-slate-500">
                                Funds are only released to the contractor when you verify the work is complete.
                            </p>
                        </div>
                    </div>
                </div>

                <DialogFooter className="sm:justify-center">
                    <DialogClose asChild>
                        <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white">
                            Got it
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
