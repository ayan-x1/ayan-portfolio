"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, X } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Ayan_s_Resume.pdf';
    link.download = 'Ayan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[90vh] p-0 flex flex-col">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle>Resume</DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={downloadResume}
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          </div>
        </DialogHeader>
        <div className="flex-1 p-4 pt-2 flex flex-col justify-start">
          <div className="w-full h-full border border-border rounded-lg overflow-hidden">
            <object
              data="/Ayan_s_Resume.pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="flex items-center justify-center h-full bg-muted">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Unable to display PDF. Please download to view.
                  </p>
                  <Button onClick={downloadResume} className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </object>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}