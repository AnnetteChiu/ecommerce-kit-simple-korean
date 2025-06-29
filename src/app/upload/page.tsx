"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadCloud } from "lucide-react";
import Image from "next/image";

export default function UploadPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          variant: "destructive",
          title: "File too large",
          description: "Please select an image smaller than 5MB.",
        });
        return;
      }
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
        toast({
            variant: "destructive",
            title: "No file selected",
            description: "Please select an image to upload.",
        });
        return;
    }
    // This is a placeholder for actual upload logic.
    // In a real app, you would use Firebase Storage to upload the file.
    toast({
        title: "Upload Successful",
        description: `${file.name} has been "uploaded".`,
    });
    setFile(null);
    setPreview(null);
  };

  if (loading || !user) {
    return null; // Or a skeleton loader
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Upload Your Design</CardTitle>
          <CardDescription>Share your fashion creations with the community.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors bg-card">
              {preview ? (
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image src={preview} alt="Image preview" fill style={{ objectFit: 'contain' }} />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                  <UploadCloud className="w-10 h-10 mb-3 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-muted-foreground">PNG, JPG, or GIF (max 5MB)</p>
                </div>
              )}
              <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept="image/png, image/jpeg, image/gif" />
            </label>
          </div>
          {preview && (
            <div className="flex justify-end">
                <Button onClick={handleUpload}>
                    <UploadCloud className="mr-2 h-4 w-4" />
                    Upload Image
                </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
