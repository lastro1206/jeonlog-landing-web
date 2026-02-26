"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface AppDownloadModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AppDownloadModal({
  open,
  onOpenChange,
}: AppDownloadModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-[#3d6034] font-pretendard">
            앱 다운로드
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 font-pretendard">
            QR 코드를 스캔하거나 아래 버튼을 클릭하여 앱을 다운로드하세요
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 py-4">
          {/* QR 코드 */}
          <div className="relative w-48 h-48 bg-white p-4 rounded-lg border-2 border-gray-200">
            <Image
              src="/images/app-qr.png"
              alt="앱 다운로드 QR 코드"
              width={192}
              height={192}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* 다운로드 버튼들 */}
          <div className="flex flex-col gap-3 w-full">
            <Button
              asChild
              className="bg-[#3d6034] hover:bg-[#2d4a25] text-white font-semibold py-6 rounded-md font-pretendard"
            >
              <a
                href="https://apps.apple.com/app/jeonlog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                App Store에서 다운로드
              </a>
            </Button>
            <Button
              asChild
              className="bg-[#3d6034] hover:bg-[#2d4a25] text-white font-semibold py-6 rounded-md font-pretendard"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.jeonlog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L16.81,15.12L14.54,12.85L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play에서 다운로드
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

