import React, { useState } from 'react';
import { Upload, FileText, Image as ImageIcon, X } from 'lucide-react';

const ReportUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const newFile = e.dataTransfer.files[0];
    if (newFile) {
      handleFile(newFile);
    }
  };

  const handleFile = (file: File) => {
    setFiles(prev => [...prev, file]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (file: File) => {
    const isImage = file.type.startsWith('image/');
    return isImage ? ImageIcon : FileText;
  };

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">Upload Health Report</h2>
      <div className="flex gap-6">
        <div
          className={`flex-1 border-2 border-dashed rounded-xl p-6 text-center ${
            isDragging ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="space-y-3">
            <Upload className="h-8 w-8 text-gray-400 mx-auto" />
            <div>
              <p className="text-gray-900 font-medium text-sm">
                Drag and drop your health report here
              </p>
              <label className="mt-2 inline-block">
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={(e) => e.target.files && handleFile(e.target.files[0])}
                />
                <span className="text-sm text-emerald-600 hover:text-emerald-700 cursor-pointer">
                  Browse files
                </span>
              </label>
            </div>
            <p className="text-xs text-gray-500">
              Supported formats: PDF, DOC, DOCX, JPG, JPEG, PNG (max. 10MB)
            </p>
          </div>
        </div>

        {files.length > 0 && (
          <div className="w-72 bg-white rounded-xl shadow-lg p-4">
            <h3 className="font-medium text-gray-900 mb-3">Uploaded Files</h3>
            <div className="space-y-2">
              {files.map((file, index) => {
                const FileIcon = getFileIcon(file);
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-2 rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <FileIcon className="h-4 w-4 text-emerald-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 truncate max-w-[180px]">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReportUpload;