import { IconName, Button as UIButton } from '@interchain-ui/react';
import { MouseEventHandler } from 'react';

export type ButtonProps =  {
  text?: string;
  icon?: IconName;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type ConnectProps = Pick<ButtonProps, 'text' | 'loading' | 'onClick'>;

function noop() {}

export function Button({
  text,
  icon,
  loading,
  disabled,
  onClick = noop
}: ButtonProps) {
  return (
    <UIButton
      onClick={onClick}
      leftIcon={icon}
      disabled={disabled}
      isLoading={loading}
      domAttributes={{
        style: {
          flex: 1,
          backgroundImage: 'linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)'
        }
      }}
    >
      {text}
    </UIButton>
  );
};

Button.Connect = function Connect({ text = 'Connect Wallet', onClick = noop }: ConnectProps) {
  return <Button text={text} icon="walletFilled" onClick={onClick} />;
};
Button.Connected = function Connected({ text = 'My Wallet', onClick = noop }: ConnectProps) {
  return <Button text={text} icon="walletFilled" onClick={onClick} />;
};

Button.Disconnected = function Disconnected({ text = 'Connect Wallet', onClick = noop }: ConnectProps) {
  return <Button text={text} icon="walletFilled" onClick={onClick} />;
};
Button.Connecting = function Connecting({ text = 'Connecting ...', onClick = noop }: ConnectProps) {
  return <Button text={text} icon="walletFilled" onClick={onClick} />;
};
Button.Rejected = function Rejected({ text = 'Reconnect', onClick = noop }: ConnectProps) {
  return <Button text={text} icon="walletFilled" onClick={onClick} />;
};
Button.Error = function Error({ text = 'Install Wallet', onClick = noop }: ConnectProps) {
  return <Button text={text} icon="walletFilled" onClick={onClick} />;
};
Button.NotExist = function NotExist({ text = 'Change Wallet', onClick = noop }: ConnectProps) {
  return <Button text={text} icon="walletFilled" onClick={onClick} />;
};