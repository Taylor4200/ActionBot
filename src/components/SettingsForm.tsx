import { useTheme } from './ThemeContext';
import { useState } from 'react';
import { Switch } from './ui/switch';
import { Select, SelectTrigger, SelectContent, SelectItem } from './ui/select';

const integrations = [
  { name: 'Discord' },
  { name: 'Shopify' },
  { name: 'Gmail' },
  { name: 'Make.com' },
  { name: 'YouTube' },
];

export default function SettingsForm() {
  const { theme, toggleTheme } = useTheme();
  const [enabled, setEnabled] = useState<Record<string, boolean>>({});
  const [model, setModel] = useState('gpt-3.5-turbo');

  return (
    <form className="max-w-xl mx-auto bg-zinc-900 rounded-lg p-8 shadow-lg mt-8 space-y-8">
      <div>
        <label className="flex items-center gap-4 text-lg font-semibold mb-2">
          <span>Dark Mode</span>
          <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
        </label>
      </div>
      <div>
        <div className="text-lg font-semibold mb-2">Integrations</div>
        <div className="space-y-3">
          {integrations.map((item) => (
            <label key={item.name} className="flex items-center gap-3">
              <Switch
                checked={!!enabled[item.name]}
                onCheckedChange={() => setEnabled((e) => ({ ...e, [item.name]: !e[item.name] }))}
              />
              <span>{item.name}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-lg font-semibold mb-2">Model</label>
        <Select value={model} onValueChange={setModel}>
          <SelectTrigger className="w-full bg-zinc-800 text-white border border-zinc-700 rounded px-4 py-2">
            {model}
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 text-white border border-zinc-700 rounded">
            <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
            <SelectItem value="gpt-4">GPT-4</SelectItem>
            <SelectItem value="custom">Custom</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </form>
  );
} 